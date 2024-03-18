using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Application.Dtos
{
    public class CreateTeamDto
    {
        public string Name { get; set; } = string.Empty;
        public ICollection<ReadEmployeeDto> Employees { get; set; } = default!;
        public string LeaderName { get; set; } = string.Empty;
        public int LeaderId { get; set; }
    }
}
