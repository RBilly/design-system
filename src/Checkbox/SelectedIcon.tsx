type SelectedIconProps = {
  className?: string;
};

export const SelectedIcon = ({ className }: SelectedIconProps) => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className={className}>
    <path d="M7.4 13.6l9.1-9.1c.2-.2.4-.3.7-.3.3 0 .6.1.8.3.2.2.3.5.3.8 0 .3-.1.5-.3.7l-9.9 9.9c-.2.2-.5.3-.7.3-.3 0-.6-.1-.8-.3L2 11.3c-.2-.2-.3-.5-.3-.8 0-.3.1-.5.3-.7.2-.3.5-.4.8-.4.3 0 .5.1.7.4l3.9 3.8z" />
  </svg>
);
