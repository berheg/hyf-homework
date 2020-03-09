using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThirtyOne.Models
{
    /// <summary>
    /// The state a game can exist in
    /// </summary>
    public enum GameState
    {
        WaitingToStart,
        InProgress,
        GameOver
    }
}
