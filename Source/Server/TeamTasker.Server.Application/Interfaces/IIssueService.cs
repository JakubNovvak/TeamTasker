using TeamTasker.Server.Application.Dtos.Issues;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface IIssueService
    {
        ReadIssueDto CreateIssue(CreateIssueDto issueDto);
        IEnumerable<ReadIssueDto> GetAllIssues();
        ReadIssueDto GetIssueById(int id);
    }
}
