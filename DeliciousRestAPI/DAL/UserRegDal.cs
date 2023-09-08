using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DeliciousRestAPI.Dal
{
    [Table("tbl_User")]
    public class UserRegDal
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int Id { get; set; }
        public string? UserName { get; set; }

        public string? Password { get; set; }

        public string? UserAddress { get; set; }

        public string? ContactNo { get; set; }

        public string? EmailId { get; set; }


    }
}
