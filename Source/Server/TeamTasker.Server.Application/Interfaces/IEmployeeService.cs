using TeamTasker.Server.Application.Dtos.Users;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface IEmployeeService
    {
        ReadDetailedEmployeeDto CreateEmployee(CreateEmployeeDto userDto);
        IEnumerable<ReadDetailedEmployeeDto> GetAllEmployees();
        ReadDetailedEmployeeDto GetEmployeeById(int id);
        ReadUserDto GetUserByEmail(string email);
        string GetUserPasswordById(int id);
        ReadDetailedEmployeeDto UpdateEmployee(CreateEmployeeDto userDto);
    }
}
