using Microsoft.AspNetCore.Mvc;
using TeamTasker.Server.Application.Dtos.Teams;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Application.Services;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeamController : Controller
    {
        private readonly ITeamService _teamService;

        public TeamController(ITeamService teamService)
        {
            _teamService = teamService;
        }

        [HttpGet]
        [Route("id", Name = "GetTeam")]
        public IActionResult GetTeam(int id)
        {
            try
            {
                var team = _teamService.GetTeam(id);
                return Ok(team);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> negative team id \"{id}\" - {ex.Message}");
                return BadRequest($"Team id \"{id}\" is not a valid id.");
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> There is no team with this id: \"{id}\" - {ex.Message}");
                return BadRequest($"There is no team with this id: \"{id}\"");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetById> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting team : {ex.Message}");
            }
        }

        [HttpGet]
        [Route("GetAllTeams", Name = "GetAllTeams")]
        public ActionResult<IEnumerable<ReadTeamDto>> GetAllTeams()
        {
            try
            {
                var readTeamsDto = _teamService.GetAllTeams();
                return Ok(readTeamsDto);
            }
            catch (KeyNotFoundException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> No teams were found - the table is empty!: {ex.Message}");
                return NotFound("There is no teams in the database.");
            }
            catch (ArgumentNullException ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Received null value - either list or DbSet{ex.Message}");
                return BadRequest($"The returned data seems to be invalid: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($">[TasksCtr] <GetAll> Unhandled exception : {ex.Message}");
                return BadRequest($"There was an unexpected error while getting teams : {ex.Message}");
            }
        }
    }
}
