using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Domain.Entities
{
    public class Leader : User
    {
        public virtual ICollection<Issue> ReportedIssues { get; set; } = default!;
        public virtual Team Team { get; set; } = default!;
    }
}
