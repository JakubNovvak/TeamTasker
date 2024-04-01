using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public UserController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        [HttpPost]
        [Route("", Name = "CreateEmployee")]
        public IActionResult CreateEmployee(CreateEmployeeDto dto)
        {
            try
            {
                _employeeService.CreateEmployee(dto);
                return Ok();
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> There was no employee provided: {ex.Message}");
                return BadRequest($"There was an unexpected error while getting employees : {ex.Message}");
            }
            catch (DbUpdateException ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> There was a problem with adding the new employee: {ex.Message}");
                return BadRequest($"There was a problem with adding the new employee: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting employees : {ex.Message}");
            }
        }

        [HttpGet]
        [Route("id", Name = "GetEmployee")]
        public IActionResult GetEmployee(int id)
        {
            try
            {
                var employee = _employeeService.GetEmployee(id);
                return Ok(employee);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> negative user id \"{id}\" - {ex.Message}");
                return BadRequest($"User id \"{id}\" is not a valid id.");
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> There is no user with this id: \"{id}\" - {ex.Message}");
                return BadRequest($"There is no user with this id: \"{id}\"");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting user : {ex.Message}");
            }
        }

        [HttpGet]
        [Route("email", Name = "GetUserByEmail")]
        public IActionResult GetUserByEmail(string email)
        {
            try
            {
                var user = _employeeService.GetUserByEmail(email);
                return Ok(user);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetByEmail> negative user email \"{email}\" - {ex.Message}");
                return BadRequest($"User email \"{email}\" is not a valid email.");
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetByEmail> There is no user with this email: \"{email}\" - {ex.Message}");
                return BadRequest($"There is no user with this id: \"{email}\"");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetByEmail> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting user : {ex.Message}");
            }
        }

        [HttpGet]
        [Route("getPassword_id", Name = "GetUserPassword")]
        public IActionResult GetUserPasword(int id)
        {
            try
            {
                var password = _employeeService.GetUserPassword(id);
                return Ok(password);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> negative user id \"{id}\" - {ex.Message}");
                return BadRequest($"User id \"{id}\" is not a valid id.");
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> There is no user with this id: \"{id}\" - {ex.Message}");
                return BadRequest($"There is no user with this id: \"{id}\"");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting user : {ex.Message}");
            }
        }

        [HttpGet]
        [Route("", Name = "GetAllEmployees")]
        public ActionResult<IEnumerable<ReadEmployeeDto>> GetAllEmployees()
        {
            try
            {
                var readEmployeesDto = _employeeService.GetAllEmployees();
                return Ok(readEmployeesDto);
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> No employees were found - the table is empty!: {ex.Message}");
                return NotFound("There is no employees in the database.");
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Received null value - either list or DbSet{ex.Message}");
                return BadRequest($"The returned data seems to be invalid: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting employees : {ex.Message}");
            }
        }
    }
}
