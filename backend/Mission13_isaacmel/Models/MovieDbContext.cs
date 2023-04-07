using System;
using Microsoft.EntityFrameworkCore;

//context file for movie database
namespace Mission13_isaacmel.Models
{
	public class MovieDbContext : DbContext
	{
		public MovieDbContext( DbContextOptions<MovieDbContext> options ) : base(options){}

		public DbSet<Movie> Movies { get; set; }
	}
}

