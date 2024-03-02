function Tag({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 50 50"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1.085 24.074L24.074 1.086A3.672 3.672 0 0126.692 0h21.456A1.852 1.852 0 0150 1.852v21.456a3.672 3.672 0 01-1.086 2.618L25.926 48.915a3.704 3.704 0 01-5.239 0L1.085 29.313a3.703 3.703 0 010-5.239zm36.878-9.259a2.777 2.777 0 100-5.555 2.777 2.777 0 000 5.555z"
      ></path>
    </svg>
  );
}

export default Tag;
