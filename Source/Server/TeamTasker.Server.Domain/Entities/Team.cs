using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Domain.Entities
{
    public class Team
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public virtual Project Project { get; set; } = default!;
        [ForeignKey("Project")]
        public int ProjectId { get; set; }
        public virtual ICollection<EmployeeTeam> EmployeeTeams { get; set; } = default!;
        public virtual Leader Leader { get; set; } = default!;
        [ForeignKey("Leader")]
        public int LeaderId { get; set; }
    }
}
