using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;
using TeamTasker.Server.Infrastructure.Presistence;

namespace TeamTasker.Server.Infrastructure.Repositories
{
    public class LeaderRepository : ILeaderRepository
    {
        private readonly AppDbContext _appDbContext;

        //TODO: Fix issues with the database access

        public LeaderRepository(AppDbContext appDbcontext)
        {
            _appDbContext = appDbcontext;
        }
        public void CreateLeader(Leader leader)
        {
            if (leader == null)
                throw new ArgumentNullException();

            _appDbContext.Add(leader);
            _appDbContext.SaveChanges();
        }

        public IEnumerable<Leader> GetAllLeaders()
        {
            var allDbLeaders = _appDbContext.Users.OfType<Leader>().ToList();

            return allDbLeaders;
        }

        public Leader GetLeader(int id)
        {
            return _appDbContext.Users.OfType<Leader>().FirstOrDefault(leader => leader.Id == id);
        }
    }
}
