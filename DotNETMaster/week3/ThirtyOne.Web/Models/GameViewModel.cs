using ThirtyOne.Shared.Models;
using ThirtyOne.Web.Models;

namespace ThirtyOne.Web.Helpers
{
    public class GameViewModel
    {
        public Game CurrentGame { get; internal set; }
        public WebPlayer CurrentPlayer { get; internal set; }
    }
}