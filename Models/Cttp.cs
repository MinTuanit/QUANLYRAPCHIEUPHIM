using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class Cttp
{
    public int IdHoaDon { get; set; }

    public int IdTp { get; set; }

    public int? SoLuong { get; set; }

    public virtual HoaDon IdHoaDonNavigation { get; set; } = null!;

    public virtual Topping IdTpNavigation { get; set; } = null!;
}
