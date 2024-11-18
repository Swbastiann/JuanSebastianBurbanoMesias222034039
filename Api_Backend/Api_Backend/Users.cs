namespace Api_Backend
{

    public class Loginn
    {
        public string Lastname { get; set; }
        public string Email { get; set; }
    }

    public class RegisterData1
    {
        // Datos del form 1
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Tel { get; set; }

        // Datos del form 2
        public string Nameg { get; set; }
        public string Emaill { get; set; }

        // Datos del form 3
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Note { get; set; } = null;
    }


}
