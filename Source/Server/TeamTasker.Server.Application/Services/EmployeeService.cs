using AutoMapper;
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

        public void CreateEmployee(CreateUserDto userDto)
        {
            if (userDto == null)
                throw new ArgumentNullException(nameof(userDto));

            var employee = _mapper.Map<Employee>(userDto);

            _employeeRepository.CreateEmployee(employee);
        }

        public IEnumerable<ReadEmployeeDto> GetAllEmployees()
        {
            var employees = _employeeRepository.GetAllEmployees();
            var employeeDtos = _mapper.Map<IEnumerable<ReadEmployeeDto>>(employees);

            return employeeDtos;
        }

        public ReadEmployeeDto GetEmployee(int id)
        {
            var employee = _employeeRepository.GetEmployee(id);

            if (employee == null)
                return null;

            var employeeDto = _mapper.Map<ReadEmployeeDto>(employee);

            return employeeDto;
        }
    }
}
