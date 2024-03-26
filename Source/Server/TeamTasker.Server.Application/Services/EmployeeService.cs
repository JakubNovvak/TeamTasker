using AutoMapper;
using System.Xml.Linq;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Infrastructure.Services
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

        public ReadEmployeeDto CreateEmployee(CreateEmployeeDto employeeDto)
        {
            if (employeeDto == null)
                throw new ArgumentNullException(nameof(employeeDto));

            var employee = _mapper.Map<Employee>(employeeDto);
            _employeeRepository.CreateEmployee(employee);

            var readEmployeeDto = _mapper.Map<ReadEmployeeDto>(employee);
            return readEmployeeDto;
        }

        public IEnumerable<ReadEmployeeDto> GetAllEmployees()
        {
            var employees = _employeeRepository.GetAllEmployees();
            var employeeDtos = _mapper.Map<IEnumerable<ReadEmployeeDto>>(employees);

            return employeeDtos;
        }

        public ReadEmployeeDto GetEmployeeById(int id)
        {
            var employee = _employeeRepository.GetEmployee(id);

            if (employee == null)
                throw new ArgumentNullException(nameof(employee));

            var employeeDto = _mapper.Map<ReadEmployeeDto>(employee);

            return employeeDto;
        }

        public ReadUserDto GetUserByEmail(string email)
        {
            var user = _employeeRepository.GetUserByEmail(email);

            if (user == null)
                throw new ArgumentNullException(nameof(user));

            var employeeDto = _mapper.Map<ReadUserDto>(user);

            return employeeDto;
        }

        public string GetUserPasswordById(int id)
        {
            var user = _employeeRepository.GetUser(id);

            var userDto = _mapper.Map<ReadUserDto>(user);
            return userDto.Password;
        }
    }
}
