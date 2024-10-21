using moviehub.Debugging;

namespace moviehub
{
    public class moviehubConsts
    {
        public const string LocalizationSourceName = "moviehub";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "5a07b286d6604c389f50ad81e8386b7d";
    }
}
