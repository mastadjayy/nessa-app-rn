import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable('courses', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  imageSrc: text('image_src').notNull()
});

export const coursesRelations = relations(courses, ({ many }) => ({
  units: many(units)
}));

export const units = pgTable('units', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(), // ex: Unit 1
  description: text('description').notNull(), // ex: Learn the basics of...
  courseId: integer('course_id').references(() => courses.id, { onDelete: 'cascade' }).notNull(),
  order: integer('order').notNull() // order of units
});

export const unitsRelations = relations(units, ({ one }) => ({
  course: one(courses, {
    fields: [units.courseId],
    references: [courses.id]
  })
}));