using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moviehub.Movies.Dto
{
    public class MovieDto
    {
        [Required]
        public long Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Director { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }
        [Required]
        public decimal Rating { get; set; }
        [Required]
        public string Genre { get; set; }
        [Required]
        public string PosterUrl { get; set; }
    }
}
