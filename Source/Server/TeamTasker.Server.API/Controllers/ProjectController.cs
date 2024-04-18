using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamTasker.Server.Application.Authorization;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Application.Dtos.Projects;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Application.Services;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly IIssueService _issueService;
        private readonly IProjectService _projectService;

        public ProjectController(IProjectService projectService,IIssueService issueService)
        {
            _projectService = projectService;
            _issueService = issueService;
        }

        [HttpPut]
       // [Authorize(Policy = AuthorizationPolicies.LoggedInUserPolicy)]
        [Route("AddPictureToProject", Name = "AddPictureToProject")]
        public IActionResult AddPictureToProjectDto(AddPictureToProjectDto dto)
        {
            try
            {
                _projectService.AddPictureToProject(dto);
                return Ok();
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> There was no project provided: {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
            catch (DbUpdateException ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> There was a problem with adding the new project: {ex.Message}");
                return BadRequest($"There was a problem with adding the new project: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <Create> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
        }

        [HttpGet]
        [Authorize(Policy = AuthorizationPolicies.BothUserPolicy)]
        [Route("GetProjectNameAndPictureDto", Name = "GetProjectNameAndPictureDto")]
        public IActionResult GetProjectNameAndImagines(int id)
        {
            try
            {
                var project = _projectService.GetProjectNameAndImagines(id);
                return Ok(project);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine($">[ProjectController] <GetProjectNameAndImagines> Negative project id - {ex.Message}");
                return BadRequest($"Project id is not valid.");
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[ProjectController] <GetProjectNameAndImagines> Project not found - {ex.Message}");
                return BadRequest("Project not found.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[ProjectController] <GetProjectNameAndImagines> Unhandled exception: {ex.Message}");
                return StatusCode(500, "Internal server error.");
            }
        }

        [HttpGet]
        //[Authorize(Policy = AuthorizationPolicies.BothUserPolicy)]
        [Route("id", Name = "GetProject")]
        public IActionResult GetProject(int id)
        {
            try
            {
                var project = _projectService.GetProject(id);
                return Ok(project);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> negative project id \"{id}\" - {ex.Message}");
                return BadRequest($"Project id \"{id}\" is not a valid id.");
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> There is no project with this id: \"{id}\" - {ex.Message}");
                return BadRequest($"There is no project with this id: \"{id}\"");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting user : {ex.Message}");
            }
        }

        [HttpGet]
       // [Authorize(Policy = AuthorizationPolicies.AdminUserPolicy)]
        [Route("", Name = "GetAllProjects")]
        public ActionResult<IEnumerable<ReadProjectDto>> GetAllProjects()
        {
            try
            {
                var readProjectDto = _projectService.GetAllProjects();
                return Ok(readProjectDto);
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> No projects were found - the table is empty!: {ex.Message}");
                return NotFound("There is no projects in the database.");
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Received null value - either list or DbSet{ex.Message}");
                return BadRequest($"The returned data seems to be invalid: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
        }

        [HttpGet]
        //TODO: Add authnetication header for swagger testing
        //[Authorize(Policy = AuthorizationPolicies.BothUserPolicy)]
        [Route("GetEmployeesFromProject", Name = "GetEmployeesFromProject")]
        public ActionResult<IEnumerable<ReadEmployeeDto>> GetEmployeesFromProject(int projectId)
        {
            try
            {
                var readEmployeesDto = _projectService.GetEmployeesFromProject(projectId);
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

        [HttpPut]
        [Route("UpdateProjectStatus", Name = "UpdateProjectStatus")]
        public IActionResult UpdateProjectStatus(UpdateProjectStatusDto dto)
        {
            try
            {
                _projectService.UpdateProjectStatus(dto);
                return Ok();
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <Update> There was no project provided: {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
            catch (DbUpdateException ex)
            {
                Console.WriteLine($">[TasksCtr] <Update> There was a problem with adding the new project: {ex.Message}");
                return BadRequest($"There was a problem with adding the new project: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <Update> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting projects : {ex.Message}");
            }
        }
    }
}
