using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Application.Dtos.Projects
{
    public class UpdateTeamToProjectDto
    {
        public int Id { get; set; }
        public int TeamId { get; set; }
    }
}
