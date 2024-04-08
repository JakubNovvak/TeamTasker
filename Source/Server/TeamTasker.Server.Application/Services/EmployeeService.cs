using AutoMapper;
using TeamTasker.Server.Application.Dtos.Projects;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IMapper _mapper;

        public EmployeeService(IEmployeeRepository employeeRepository, IMapper mapper)
        {
            _employeeRepository = employeeRepository;
            _mapper = mapper;
        }

        public void CreateEmployee(CreateEmployeeDto employeeDto)
        {
            if (employeeDto == null)
                throw new ArgumentNullException(nameof(employeeDto));

            var employee = _mapper.Map<Employee>(employeeDto);

            _employeeRepository.CreateEmployee(employee);
        }

        public IEnumerable<ReadEmployeeDto> GetAllEmployees()
        {
            var employees = _employeeRepository.GetAllEmployees();
            var employeeDtos = _mapper.Map<IEnumerable<ReadEmployeeDto>>(employees);

            return employeeDtos;
        }
        public IEnumerable<ReadUserDto> GetAllUsers()
        {
            var users = _employeeRepository.GetAllUsers();
            var userDtos = _mapper.Map<IEnumerable<ReadUserDto>>(users);

            return userDtos;
        }

        public ReadEmployeeDto GetEmployee(int id)
        {
            var employee = _employeeRepository.GetEmployee(id);

            if (employee == null)
                return null;

            var employeeDto = _mapper.Map<ReadEmployeeDto>(employee);

            return employeeDto;
        }

        public ReadUserDto GetUserByEmail(string email)
        {
            var user = _employeeRepository.GetUserByEmail(email);

            if (user == null)
                return null;

            var employeeDto = _mapper.Map<ReadUserDto>(user);

            return employeeDto;
        }

        public string GetUserPassword(int id)
        {
            var user = _employeeRepository.GetUser(id);

            var userDto = _mapper.Map<ReadUserDto>(user);
            return userDto.Password;
        }
        public ReadUserNameDto GetUserName(int id)
        {
            var user = _employeeRepository.GetUser(id);
            if (user == null)
                throw new Exception("User not found");

            var userDto = _mapper.Map<ReadUserNameDto>(user);
            return userDto;
        }
        public ReadUserNameAndEmailDto GetUserNameAndEmail(int id)
        {
            var user = _employeeRepository.GetUser(id);
            if (user == null)
                throw new Exception("User not found");

            var userDto = _mapper.Map<ReadUserNameAndEmailDto>(user);
            return userDto;
        }
        public void AddAvatarToUser(AddAvatarToUserDto dto)
        {
            if (dto == null)
                throw new ArgumentNullException(nameof(dto));

            var user = _employeeRepository.GetUser(dto.Id);
            if (user == null)
                throw new Exception("User not found");

            user.Avatar = dto.Avatar;
            _employeeRepository.UpdateUser(user);
        }
    }
}
