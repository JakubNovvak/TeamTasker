using System.Linq.Expressions;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface IIssueService
    {
        void CreateIssue(CreateIssueDto issueDto, string email);
        IEnumerable<ReadIssueDto> GetAllIssues();
        ReadIssueDto GetIssue(int id);
        void AddIssueToProject(AddIssueToProjectDto issueDto);

        //IEnumerable<GetCompletedIssueDto> GetCompletedIssue();
        //IEnumerable<GetCompletedIssueDto> GetNotCompletedIssue();
        IEnumerable<GetIssueByPriorityDto> GetIssueByPriority(string prioroty);
        IEnumerable<GetIssueAssignedToEmployeeDto> GetIssueAssignedToEmployee(int employeeId);
    }
}
