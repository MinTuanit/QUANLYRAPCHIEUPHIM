using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class Cthd
{
    public int IdGhe { get; set; }

    public int IdLichChieuPhim { get; set; }

    public int IdHoaDon { get; set; }

    public virtual Ghe IdGheNavigation { get; set; } = null!;

    public virtual HoaDon IdHoaDonNavigation { get; set; } = null!;

    public virtual LichChieuPhim IdLichChieuPhimNavigation { get; set; } = null!;
}
