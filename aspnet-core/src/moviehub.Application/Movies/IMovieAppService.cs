using Abp.Application.Services;
using moviehub.Movies.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviehub.Movies
{
    public interface IMovieAppService : IApplicationService
    {
        Task CreateOrUpdateMovieAsync(CreateOrUpdateMovieDto input);
        Task<MovieDto> GetMovieAsync(long id);
        Task<PagedMovieResultDto> GetPagedMoviesAsync(int skipCount, int maxResultCount);
        Task DeleteMovieAsync(long id);
    }
}
