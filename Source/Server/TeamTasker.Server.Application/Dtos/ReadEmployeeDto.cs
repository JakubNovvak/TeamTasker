using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Application.Dtos
{
    public class ReadEmployeeDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public ICollection<ReadCommentDto> Notifications { get; set; } = default;
        public ICollection<ReadIssueDto> AssignedIssues { get; set; } = default;
        public ICollection<ReadTeamDto> Teams { get; set; } = default;
    }
}
