type AvatarProps={
    src: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg';
}

const Avatar = ({ src, alt, size = 'md' }: AvatarProps) => {
  return (
    <div>
      <img src={src} alt={alt} className={`
        rounded-full
        ${size === 'sm' ? 'w-8 h-8' : ''}
        ${size === 'md' ? 'w-12 h-12' : ''}
        ${size === 'lg' ? 'w-16 h-16' : ''}
      `} />
    </div>
  )
}

export default Avatar