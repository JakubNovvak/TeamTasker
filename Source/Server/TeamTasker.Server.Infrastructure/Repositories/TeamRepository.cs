﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;
using TeamTasker.Server.Infrastructure.Presistence;

namespace TeamTasker.Server.Infrastructure.Repositories
{
    public class TeamRepository : ITeamRepository
    {
        private readonly AppDbContext _appDbContext;
        public TeamRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public void CreateTeam(Team team)
        {
            if (team == null)
                throw new ArgumentNullException();

            _appDbContext.Add(team);
            _appDbContext.SaveChanges();
        }

        public IEnumerable<Team> GetAllTeams()
        {
            var allDbTeams = _appDbContext.Teams.ToList();

            return allDbTeams;
        }

        public Team GetTeam(int id)
        {
            return _appDbContext.Teams.FirstOrDefault(team => team.Id == id);
        }
    }
}
