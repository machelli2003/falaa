import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CategoryCard({
  title,
  subtitle,
  image,
  to,
}: {
  title: string;
  subtitle: string;
  image: string;
  to: string;
}) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2 }}>
      <Link
        to={to}
        className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-ink sm:aspect-[3/4]"
      >
        <motion.img
          src={image}
          alt=""
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div className="relative z-10 flex items-end justify-between p-5">
          <div>
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</h3>
            <p className="mt-1 text-sm text-white/70">{subtitle}</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink transition group-hover:bg-falaa group-hover:text-white">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
