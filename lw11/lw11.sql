DROP DATABASE university;
CREATE DATABASE university;
USE university;

CREATE TABLE `faculties`
(
    faculty_id      INT AUTO_INCREMENT NOT NULL,
    faculty         VARCHAR(255)       NOT NULL,
    PRIMARY KEY (faculty_id)   
)
    DEFAULT CHARACTER SET utf8mb4
    COLLATE `utf8mb4_unicode_ci`
    ENGINE = InnoDB
;

CREATE TABLE `groups`
(
    group_id        INT AUTO_INCREMENT NOT NULL,
    `group`         VARCHAR(255)       NOT NULL,
    faculty_id      INT                NOT NULL,
    PRIMARY KEY (group_id)
) 
    DEFAULT CHARACTER SET utf8mb4
    COLLATE `utf8mb4_unicode_ci`
    ENGINE = InnoDB
;

CREATE TABLE `students`
(
    student_id      INT AUTO_INCREMENT NOT NULL,
    first_name      VARCHAR(255)       NOT NULL,
    last_name       VARCHAR(255)       NOT NULL,
    age             INT                NOT NULL,
    group_id        INT                NOT NULL,
    PRIMARY KEY (student_id)
) 
    DEFAULT CHARACTER SET utf8mb4
    COLLATE `utf8mb4_unicode_ci`
    ENGINE = InnoDB
;

INSERT INTO `faculties` (faculty) VALUES
    ("Faculty of computer science and computer engineering"),
    ("Faculty of Economics"),
    ("Institute of Forest and Nature Management")
;

INSERT INTO `groups` (`group`, faculty_id) VALUES
    ('Software engeneering',              1),
    ('Computer science and engineering'   1),
    ('Information security',              1),

    ('Applied Computer Science',          2),
    ('Economic security',                 2),
    ('Finance and Credit',                2),

    ('Biotechnology',                     3),
    ('Ecology and nature management',     3),
    ('forestry business',                 3)
;

INSERT INTO `students` (first_name, last_name, age, group_id) VALUES
  ('Роман', 'Горбачев',       18, 1),
  ('Анна', 'Матвеева',        18, 2),
  ('Никита', 'Лаптев',        18, 3),
  ('Вероника', 'Кириллова',   18, 4),
  ('Карина', 'Петрова',       18, 5),
  ('Иван', 'Селиванов',       18, 6),
  ('Ярослав', 'Смирнов',      18, 7),
  ('Кира', 'Юдина',           18, 8),
  ('Анастасия', 'Степанова',  18, 9),
  ('Тимофей', 'Щукин',        19, 1),
  ('Валерия', 'Матвеева',     19, 2),
  ('Тимофей', 'Романов',      19, 3),
  ('Иван', 'Гуляев',          19, 4),
  ('Ева', 'Александрова',     19, 5),
  ('Сергей', 'Дроздов',       19, 6),
  ('Александр', 'Горячев',    19, 7),
  ('Ксения', 'Дубровина',     19, 8),
  ('Екатерина', 'Кудрявцева', 19, 9),
  ('Максим', 'Александров',   20, 1),
  ('Мария', 'Кузнецова',      20, 2),
  ('Алёна', 'Смирнова',       20, 3),
  ('Маргарита', 'Петрова',    20, 4),
  ('Михаил', 'Грибов',        20, 5),
  ('Маргарита', 'Майорова',   20, 6),
  ('Михаил', 'Киселев',       20, 7),
  ('Семён', 'Новиков',        20, 8),
  ('Максим', 'Исаев',         20, 9),
  ('Максим', 'Калинин',       21, 1),
  ('Степан', 'Костин',        21, 2),
  ('Матвей', 'Михайлов',      21, 3),
  ('Малика', 'Ширяева',       21, 4),
  ('Игорь', 'Вдовин',         21, 5),
  ('Анастасия', 'Павловская', 21, 6),
  ('Даниил', 'Рудаков',       21, 7),
  ('Ариана', 'Леонтьева',     21, 8),
  ('Степан', 'Золотарев',     21, 9),
  ('Демид', 'Журавлев',       22, 1),
  ('София', 'Морозова',       22, 2),
  ('Елизавета', 'Сергеева',   22, 3),
  ('Елисей', 'Горбунов',      22, 4),
  ('Марьям', 'Корчагина',     22, 5),
  ('Адам', 'Матвеев',         22, 6),
  ('Андрей', 'Овсянников',    22, 7),
  ('Артём', 'Афанасьев',      22, 8),
  ('Виктория', 'Никитина',    22, 9)
;

-- Все студенты 19 лет
SELECT 
    first_name AS "First Name", 
    last_name  AS "Last Name",
    age        AS "Age"
FROM 
    students
WHERE
    age = 19
;

-- Все студенты из группы
SELECT 
    students.first_name AS "First Name", 
    students.last_name  AS "Last Name",
    groups.group        AS "Group"
FROM 
    students 
    JOIN groups ON students.group_id = groups.group_id
WHERE   
   groups.group_id = 6
;

-- Все студенты из факультета
SELECT
    students.first_name AS "First Name",
    students.last_name  AS "Last Name",
    faculties.faculty   AS "Faculty"
FROM
    students
    JOIN groups ON students.group_id = groups.group_id
    JOIN faculties ON groups.faculty_id = faculties.faculty_id
WHERE   
    faculties.faculty = "Faculty of computer science and computer engineering"
;

-- Факультет и группа конкретного студента
SELECT
    students.first_name AS "First Name", 
    students.last_name  AS "Last Name",
    groups.group        AS "Group",
    faculties.faculty   AS "Faculty"
FROM
    students
    JOIN groups ON students.group_id = groups.group_id
    JOIN faculties ON groups.faculty_id = faculties.faculty_id
WHERE   
    students.first_name = 'Александр' AND students.last_name = 'Горячев'
;       