using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Application.Dtos.Projects;
using TeamTasker.Server.Application.Dtos.Teams;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeamController : ControllerBase
    {
        private readonly IProjectService _projectService;
        private readonly ITeamService _teamService;

        public TeamController(IProjectService projectService, ITeamService teamService)
        {
            _projectService = projectService;
            _teamService = teamService;
        }

        [HttpGet]
        [Route("id", Name = "GetTeam")]
        public IActionResult GetProject(int id)
        {
            try
            {
                var team = _teamService.GetTeam(id);
                return Ok(team);
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
        [Route("", Name = "GetAllTeams")]
        public ActionResult<IEnumerable<ReadTeamDto>> GetAllTeams()
        {
            try
            {
                var team = _teamService.GetAllTeams();
                return Ok(team);
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


