using System;
using System.Collections.Generic;

namespace QuanLyRapChieuPhim.Models;

public partial class Topping
{
    public int IdTp { get; set; }

    public string? TenTp { get; set; }

    public int? Gia { get; set; }
    public string? HinhAnh { get; set; }

    public virtual ICollection<Cttp> Cttps { get; set; } = new List<Cttp>();
}
