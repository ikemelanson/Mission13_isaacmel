using System;
using Microsoft.AspNetCore.Mvc;
using Mission13_isaacmel.Models;

namespace Mission13_isaacmel.Controllers
{

//API endpoint to return movie data

	[ApiController]
	[Route("[controller]")]
	public class MovieController : Controller
	{
		public MovieDbContext context;

		public MovieController(MovieDbContext temp)
		{
			context = temp;
		}

		public IEnumerable<Movie> Get()
		{

			//get data, filter it to only edited movies, and alphabatize them
			return context.Movies
				.Where(x => x.Edited == "Yes")
				.OrderBy(x => x.Title)
				.ToArray();
		}
	}
}

