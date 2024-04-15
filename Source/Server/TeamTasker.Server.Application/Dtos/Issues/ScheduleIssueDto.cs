using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeamTasker.Server.Application.Dtos.Issues
{
    public class ScheduleIssueDto
    {
        public int Id { get; set; }
        public TimeSpan Duration { get; set; }
    }
}
