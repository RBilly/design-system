type IndeterminateIconProps = {
  className?: string;
};

export const IndeterminateIcon = ({ className }: IndeterminateIconProps) => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className={className}>
    <path d="M1.667 10.208c0-.575.466-1.041 1.041-1.041h14.584a1.042 1.042 0 110 2.083H2.708a1.042 1.042 0 01-1.041-1.042z" />
  </svg>
);
