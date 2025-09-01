-- Seed data for Barcelona Aesthetics Clinic (run in Supabase SQL editor)

insert into treatments (title, slug, category, description, content, image_url) values
('Facial Aesthetics', 'facial-aesthetics', 'Face', 'Non-surgical facial rejuvenation.', 'Comprehensive facial treatments tailored to your skin.', null),
('Body Contouring', 'body-contouring', 'Body', 'Advanced body shaping solutions.', 'Sculpt and define with cutting-edge technology.', null),
('Skin Rejuvenation', 'skin-rejuvenation', 'Skin', 'Renew and refresh your skin.', 'Improve texture, tone, and radiance.', null)
on conflict (slug) do nothing;

insert into doctors (name, specialization, bio, image_url) values
('Dr. Ana Vidal', 'Facial Aesthetics', 'Over 15 years specializing in minimally invasive procedures.', null),
('Dr. Marc Soler', 'Body Contouring', 'Precision body contouring and post-care excellence.', null)
on conflict do nothing;

insert into testimonials (name, text, image_url, approved) values
('Laura G.', 'My experience was exceptional, results exceeded expectations!', null, true),
('Javier P.', 'Professional staff and luxury atmosphere.', null, true)
on conflict do nothing;

insert into blog_posts (title, slug, content, image_url) values
('Trends in Aesthetic Medicine 2025', 'trends-2025', 'Key advances and patient-first approaches.', null),
('Preparing for Your First Consultation', 'first-consultation', 'What to expect and how to prepare.', null)
on conflict (slug) do nothing;

