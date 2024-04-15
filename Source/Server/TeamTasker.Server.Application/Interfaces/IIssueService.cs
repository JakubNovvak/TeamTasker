using System.Linq.Expressions;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface IIssueService
    {
        IEnumerable<ReadIssueDto> GetAllIssues();
        ReadIssueDto GetIssue(int id);
        void AddIssueToProject(AddIssueToProjectDto issueDto); //Probably unnecessary 

        //IEnumerable<GetCompletedIssueDto> GetCompletedIssue();
        //IEnumerable<GetCompletedIssueDto> GetNotCompletedIssue();
        IEnumerable<GetIssueByPriorityDto> GetIssueByPriority(PriorityValue prioroty);
        IEnumerable<GetIssueAssignedToEmployeeDto> GetIssueAssignedToEmployee(int employeeId);
    }
}
