using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Domain.Entities
{
    public class Employee : User
    {
        public virtual ICollection<Issue> AssignedIssues { get; set; } = default!;
        public virtual ICollection<EmployeeTeam> EmployeeTeams { get; set; } = default!;
    }
}
