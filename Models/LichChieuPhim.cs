using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class LichChieuPhim
{
    public int IdLichChieuPhim { get; set; }

    public DateOnly? NgayChieu { get; set; }

    public TimeOnly? GioBatDau { get; set; }

    public int? GiaVe { get; set; }

    public int? IdPhong { get; set; }

    public int? IdPhim { get; set; }

    public virtual ICollection<Cthd> Cthds { get; set; } = new List<Cthd>();

    public virtual Phim? IdPhimNavigation { get; set; }

    public virtual Phong? IdPhongNavigation { get; set; }
}
