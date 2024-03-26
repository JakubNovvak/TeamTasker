using TeamTasker.Server.Application.Dtos.Users;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface IEmployeeService
    {
        ReadEmployeeDto CreateEmployee(CreateEmployeeDto userDto);
        IEnumerable<ReadEmployeeDto> GetAllEmployees();
        ReadEmployeeDto GetEmployeeById(int id);
        ReadUserDto GetUserByEmail(string email);
        string GetUserPasswordById(int id);
    }
}
