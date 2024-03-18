using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface ILeaderRepository
    {
        void CreateLeader(Leader leader);
        IEnumerable<Leader> GetAllLeaders();
        Leader GetLeader(int id);
    }
}
