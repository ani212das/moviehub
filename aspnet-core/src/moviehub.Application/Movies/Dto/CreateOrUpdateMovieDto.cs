using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviehub.Movies.Dto
{
    public class CreateOrUpdateMovieDto
    {
        public long Id {  get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Director { get; set; }
        public DateTime ReleaseDate { get; set; }
        public decimal Rating { get; set; }
        public string Genre { get; set; }
        public string PosterUrl { get; set; }
    }
}
