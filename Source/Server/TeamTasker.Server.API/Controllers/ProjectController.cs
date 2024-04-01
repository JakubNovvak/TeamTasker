using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpPost]
        [Route("", Name = "CreateProject")]
        public IActionResult CreateProject(CreateProjectDto dto)
        {
            try
            {
                _projectService.CreateProject(dto);
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

        [HttpPost]
        [Route("AddIssueToProject", Name = "AddIssueToProject")]
        public IActionResult AddIssueToProject(AddIssueToProjectDto dto)
        {
            try
            {
                _issueService.AddIssueToProject(dto);
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


        [HttpPost]
        [Route("AddTeamToProject", Name = "AddTeamToProject")]
        public IActionResult AddTeamToProject(AddTeamToProjectDto dto)
        {
            try
            {
                _projectService.AddTeamToProject(dto);
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


        [HttpPut]
        [Route("UpdateTeamToProject", Name = "UpdateTeamToProject")]
        public IActionResult UpdateTeamToProject(UpdateTeamToProjectDto dto)
        {
            try
            {
                _projectService.UpdateTeamToProject(dto);
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
        [Route("GetProjectNameAndImagines", Name = "GetProjectNameAndImagines")]
        public IActionResult GetProjectNameAndImagines(GetProjectNameAndImaginesDto dto)
        {
            try
            {
                var project = _projectService.GetProjectNameAndImagines(dto);
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
    }
}
