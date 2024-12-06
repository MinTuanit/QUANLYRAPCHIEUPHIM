using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class HoaDon
{
    public int IdHoaDon { get; set; }

    public DateOnly? NgayDat { get; set; }

    public int? TongTien { get; set; }

    public int? IdKh { get; set; }

    public virtual ICollection<Cthd> Cthds { get; set; } = new List<Cthd>();

    public virtual ICollection<Cttp> Cttps { get; set; } = new List<Cttp>();

    public virtual KhachHang? IdKhNavigation { get; set; }
}
