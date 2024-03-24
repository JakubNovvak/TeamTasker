using TeamTasker.Server.Application.Dtos.Issues;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface IIssueService
    {
        void CreateIssue(CreateIssueDto issueDto);
        IEnumerable<ReadIssueDto> GetAllIssues();
        ReadIssueDto GetIssue(int id);
    }
}
