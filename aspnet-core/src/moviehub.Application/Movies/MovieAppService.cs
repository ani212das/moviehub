using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;
using Abp.UI;
using Microsoft.EntityFrameworkCore;
using moviehub.Movies.Dto;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace moviehub.Movies
{
    public class MovieAppService : ApplicationService, IMovieAppService
    {
        private readonly IRepository<Movie> _movieRepository;

        public MovieAppService(IRepository<Movie> movieRepository)
        {
            _movieRepository = movieRepository;
        }

        public async Task CreateOrUpdateMovieAsync(CreateOrUpdateMovieDto input)
        {
            if (input == null)
                throw new UserFriendlyException("Movie data is required.");

            var movie = new Movie
            {
                Title = input.Title,
                Description = input.Description,
                Director = input.Director,
                ReleaseDate = input.ReleaseDate,
                Rating = input.Rating,
                Genre = input.Genre,
                PosterUrl = input.PosterUrl
            };

            await _movieRepository.InsertOrUpdateAsync(movie);
        }
        public async Task UpdateMovieAsync(CreateOrUpdateMovieDto input)
        {
            if (input == null)
                throw new UserFriendlyException("Movie data is required.");

            var movie = await _movieRepository.FirstOrDefaultAsync((int)input.Id);
            if (movie == null)
                throw new UserFriendlyException("Movie not found.");

            movie.Title = input.Title;
            movie.Description = input.Description;
            movie.Director = input.Director;
            movie.ReleaseDate = input.ReleaseDate;
            movie.Rating = input.Rating;
            movie.Genre = input.Genre;
            movie.PosterUrl = input.PosterUrl;

            await _movieRepository.UpdateAsync(movie);
        }
        public async Task<MovieDto> GetMovieAsync(long id)
        {
            var movie = await _movieRepository.GetAsync((int)id);

            return ObjectMapper.Map<MovieDto>(movie);
        }

        public async Task<PagedMovieResultDto> GetPagedMoviesAsync(int skipCount, int maxResultCount)
        {
            var query = _movieRepository.GetAll();
            var movies = await query
                .OrderBy(m => m.ReleaseDate)
                .PageBy(skipCount, maxResultCount)
                .ToListAsync();

            var totalCount = await query.CountAsync();

            return new PagedMovieResultDto
            {
                TotalCount = totalCount,
                Items = ObjectMapper.Map<List<MovieDto>>(movies)
            };
        }

        public async Task DeleteMovieAsync(long id)
        {
            var movie = await _movieRepository.GetAsync((int)id);
            await _movieRepository.DeleteAsync(movie);
        }
    }

}
