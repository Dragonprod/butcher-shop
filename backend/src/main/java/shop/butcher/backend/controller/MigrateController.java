package shop.butcher.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shop.butcher.backend.dto.response.MessageResponse;
import shop.butcher.backend.entity.Category;
import shop.butcher.backend.entity.Product;
import shop.butcher.backend.entity.Role;
import shop.butcher.backend.entity.User;
import shop.butcher.backend.enums.RoleEnum;
import shop.butcher.backend.repository.CategoryRepository;
import shop.butcher.backend.repository.ProductRepository;
import shop.butcher.backend.repository.RoleRepository;
import shop.butcher.backend.repository.UserRepository;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/migrate")
public class MigrateController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    PasswordEncoder encoder;


    @PostMapping("/")
    public ResponseEntity<?> initDataBase() {
        Role roleAdmin = new Role(RoleEnum.ROLE_ADMIN);
        Role roleUser = new Role(RoleEnum.ROLE_USER);
        roleRepository.save(roleAdmin);
        roleRepository.save(roleUser);
        User userAdmin = new User("admin", "admin@butcher.shop", encoder.encode("admin"));
        User userUser = new User("user", "user@butcher.shop", encoder.encode("user"));
        Set<Role> roles = new HashSet<>();
        Set<Role> roles1 = new HashSet<>();
        roles.add(roleAdmin);
        roles1.add(roleUser);
        userAdmin.setRoles(roles);
        userUser.setRoles(roles1);
        userRepository.save(userAdmin);
        userRepository.save(userUser);
        Category category1 = new Category("Стейки");
        Category category2 = new Category("Котлеты");
        Category category3 = new Category("Хот-доги");
        Category category4 = new Category("Напитки");
        Category category5 = new Category("Бургеры");
        categoryRepository.save(category1);
        categoryRepository.save(category2);
        categoryRepository.save(category3);
        categoryRepository.save(category4);
        categoryRepository.save(category5);
        Category categoryOneObject = categoryRepository.findByName("Стейки")
                .orElseThrow(() -> new RuntimeException("Error: Category is not found."));
        Category categoryTwoObject = categoryRepository.findByName("Котлеты")
                .orElseThrow(() -> new RuntimeException("Error: Category is not found."));
        Category categoryThreeObject = categoryRepository.findByName("Хот-доги")
                .orElseThrow(() -> new RuntimeException("Error: Category is not found."));
        Category categoryFourObject = categoryRepository.findByName("Напитки")
                .orElseThrow(() -> new RuntimeException("Error: Category is not found."));
        Category categoryFiveObject = categoryRepository.findByName("Бургеры")
                .orElseThrow(() -> new RuntimeException("Error: Category is not found."));
        Product catOneProduct1 = new Product(
                "Стейк из говядины",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://miratorg.ru/upload/resize_cache/iblock/5ec/614_750_1/1010012122_Steyk-iz-okoroka-gov-TF-okhl-0_47kg4-_1_88kg_1.png",
                1,
                21,
                "от -1,5 до 4°С",
                "Говядина",
                450
        );
        Product catOneProduct2 = new Product(
                "Стейк из свинины",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://miratorg.ru/upload/resize_cache/iblock/1de/614_750_1/Steyk_cochnyy.png",
                0.200,
                13,
                "от -1,5 до 4°С",
                "Свинина",
                439
        );
        Product catOneProduct3 = new Product(
                "Стейк из баранины",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://miratorg.ru/upload/resize_cache/iblock/3b6/614_750_1/1010012225_Steyk-iz-sedla-yagn-okhl-GZMS-_0_44_1_6kg_-Dorper-Miratorg.png",
                0.420,
                14,
                "от -1,5 до 4°С",
                "Баранина",
                593
        );
        catOneProduct1.setCategory(categoryOneObject);
        catOneProduct2.setCategory(categoryOneObject);
        catOneProduct3.setCategory(categoryOneObject);
        Product catTwoProduct1 = new Product(
                "Котлеты из говядины",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://miratorg.ru/upload/resize_cache/iblock/dec/614_750_1/kotleti_iz_rub_govyadini.png",
                0.3,
                365,
                "не выше -18°С",
                "Говядина",
                400
        );
        Product catTwoProduct2 = new Product(
                "Котлеты из курицы",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://miratorg.ru/upload/resize_cache/iblock/677/614_750_1/kotleti_iz_kur_file.png",
                0.3,
                365,
                "не выше -18°С",
                "Курица",
                400
        );
        Product catTwoProduct3 = new Product(
                "Котлеты из индейки",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://miratorg.ru/upload/resize_cache/iblock/81b/614_750_1/kotleti_indeyka.png",
                0.3,
                365,
                "не выше -18°С",
                "Индейка",
                500
        );
        catTwoProduct1.setCategory(categoryTwoObject);
        catTwoProduct2.setCategory(categoryTwoObject);
        catTwoProduct3.setCategory(categoryTwoObject);
        Product catThreeProduct1 = new Product(
                "Хот-дог фирменный",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://www.delivery-club.ru/media/cms/relation_product/36432/321660695_m650.jpg",
                0.270,
                2,
                "от -1,5 до 4°С",
                "Свежая булочка, сосиска гриль, спелые томаты, свежие огурцы, маринованный красный лук, картофель пай, свежая зелень, сладкая горчица и два фирменных соуса",
                240
        );
        Product catThreeProduct2 = new Product(
                "Хот-дог классический",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://www.delivery-club.ru/media/cms/relation_product/36432/321660694_m650.jpg",
                0.190,
                2,
                "от -1,5 до 4°С",
                "Свежая булочка, сосиска гриль, сладкая горчица и два фирменных соуса",
                210
        );
        catThreeProduct1.setCategory(categoryThreeObject);
        catThreeProduct2.setCategory(categoryThreeObject);
        Product catFourProduct1 = new Product(
                "Чай Lipton Зеленый",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://eda.yandex/images/2415806/d0c404bb37cadda30c55c6ae191cef32.png",
                0.5,
                365,
                "нет",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                109
        );
        Product catFourProduct2 = new Product(
                "Aqua Minerale",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://eda.yandex/images/3805363/4b9a7e3b08b5ab21f61313163af8754d.png",
                0.5,
                365,
                "нет",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                99
        );
        Product catFourProduct3 = new Product(
                "Пиво Bud 0%",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://eda.yandex/images/3809330/5d576c05fb5acf567663f0eeee6623ab.png",
                0.450,
                365,
                "нет",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                159
        );
        catFourProduct1.setCategory(categoryFourObject);
        catFourProduct2.setCategory(categoryFourObject);
        catFourProduct3.setCategory(categoryFourObject);
        Product catFiveProduct1 = new Product(
                "Шефбургер острый",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://eda.yandex/images/3518584/4adbccf4a404aed738af33bb811dc37b",
                0.179,
                12,
                "от -1,5 до 4°С",
                "Острая курочка в панировке Hot&spicy, сочные листья салата, пикантные маринованные огурчики, лук, фирменный соус «Бургер» и булочка с черно-белым кунжутом.",
                109
        );
        Product catFiveProduct2 = new Product(
                "Чизбургер Де Люкс",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://eda.yandex/images/2415806/9208fd6211dafcc32af37383b764c3dd",
                0.205,
                12,
                "от -1,5 до 4°С",
                "Пряный горчичный соус, кетчуп, сочное филе в оригинальной панировке, лук, сыр Чеддер, огурцы на пшеничной булочке с кукурузной посыпкой, свежий салат и ломтики помидора.",
                169
        );
        Product catFiveProduct3 = new Product(
                "Шефбургер Де Люкс",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "https://eda.yandex/images/3508859/fd8c3f906dba97ae7968e0990d161249",
                0.197,
                12,
                "от -1,5 до 4°С",
                "Острое филе в хрустящей панировке, салат айсберг, маринованные огурцы, лук, фирменный соус «Бургер», булочка с кунжутом, ломтик сыра и ломтик бекон",
                210
        );
        catFiveProduct1.setCategory(categoryFiveObject);
        catFiveProduct2.setCategory(categoryFiveObject);
        catFiveProduct3.setCategory(categoryFiveObject);
        productRepository.save(catOneProduct1);
        productRepository.save(catOneProduct2);
        productRepository.save(catOneProduct3);
        productRepository.save(catTwoProduct1);
        productRepository.save(catTwoProduct2);
        productRepository.save(catTwoProduct3);
        productRepository.save(catThreeProduct1);
        productRepository.save(catThreeProduct2);
        productRepository.save(catFourProduct1);
        productRepository.save(catFourProduct2);
        productRepository.save(catFourProduct3);
        productRepository.save(catFiveProduct1);
        productRepository.save(catFiveProduct2);
        productRepository.save(catFiveProduct3);
        return ResponseEntity.ok(new MessageResponse("Migrations created successfully!"));
    }
}
