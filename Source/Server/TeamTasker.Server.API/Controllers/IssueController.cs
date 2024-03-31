using Microsoft.AspNetCore.Mvc;
using TeamTasker.Server.Application.Services;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.API.Controllers
{
    public class IssueController : Controller
    {


        private readonly IIssueService _issueService;

        public IssueController(IIssueService issueService)
        {
            _issueService = issueService;
        }
        [HttpGet]
        [Route("GetAllIssues", Name = "GetAllIssues")]
        public IActionResult GetAllIssue()
        {
            try
            {
                var issue = _issueService.GetAllIssues();
                return Ok(issue);
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
