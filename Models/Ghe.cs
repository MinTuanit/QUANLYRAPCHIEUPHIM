using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class Ghe
{
    public int IdGhe { get; set; }

    public string? TenGhe { get; set; }

    public int? IdPhong { get; set; }

    public virtual ICollection<Cthd> Cthds { get; set; } = new List<Cthd>();

    public virtual Phong? IdPhongNavigation { get; set; }
}
