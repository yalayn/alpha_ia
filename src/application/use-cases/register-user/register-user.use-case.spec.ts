import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcryptjs';
import { RegisterUserUseCase } from './register-user.use-case';
import { USER_REPOSITORY } from '../../../domain/ports/user.repository.port';
import { UserAlreadyExistsException } from '../../../domain/exceptions/user-already-exists.exception';

jest.mock('uuid', () => ({ v4: () => 'test-uuid' }));

describe('RegisterUserUseCase', () => {
  let useCase: RegisterUserUseCase;
  let userRepository: any;

  beforeEach(async () => {
    userRepository = {
      findByEmail: jest.fn(),
      save: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegisterUserUseCase,
        {
          provide: USER_REPOSITORY,
          useValue: userRepository,
        },
      ],
    }).compile();

    useCase = module.get<RegisterUserUseCase>(RegisterUserUseCase);
  });

  it('should register a new user successfully', async () => {
    const dto = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    };

    userRepository.findByEmail.mockResolvedValue(null);
    userRepository.save.mockResolvedValue(undefined);

    const result = await useCase.execute(dto);

    expect(result.email).toBe(dto.email);
    expect(result.name).toBe(dto.name);
    expect(result.role).toBe('customer');
    const isPasswordHashed = await bcrypt.compare(dto.password, result.password);
    expect(isPasswordHashed).toBe(true);
    expect(userRepository.save).toHaveBeenCalled();
  });

  it('should throw UserAlreadyExistsException if email is already in use', async () => {
    const dto = {
      email: 'existing@example.com',
      password: 'password123',
      name: 'Existing User',
    };

    userRepository.findByEmail.mockResolvedValue({ id: '123', email: dto.email });

    await expect(useCase.execute(dto)).rejects.toThrow(UserAlreadyExistsException);
    expect(userRepository.save).not.toHaveBeenCalled();
  });
});
